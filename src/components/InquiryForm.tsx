import { FormEvent, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

const deliveryDurations = [
  ["UNDER_3_MONTHS", "<3 month"],
  ["THREE_TO_SIX_MONTHS", "3-6 month"],
  ["NINE_TO_TWELVE_MONTHS", "9-12 month"],
  ["NOT_URGENT", "not urgent"],
] as const;

const potentialImpacts = [
  ["UNDER_1M", "<$1M"],
  ["ONE_TO_5M", "1-5M"],
  ["FIVE_TO_20", "5-20"],
  ["TWENTY_TO_100M", "20-100M"],
  ["NOT_DEFINED", "not defined"],
] as const;

type DeliveryDuration = (typeof deliveryDurations)[number][0];
type PotentialImpact = (typeof potentialImpacts)[number][0];

function selected<T extends string>(value: FormDataEntryValue | null, allowed: readonly T[]): T {
  const text = String(value ?? "");
  if (!allowed.includes(text as T)) {
    throw new Error("Choose a valid option.");
  }
  return text as T;
}

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const departmentOrTitle = String(data.get("departmentOrTitle") ?? "").trim();
    setStatus("sending");
    try {
      const { errors } = await client.models.Inquiry.create({
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        companyName: String(data.get("companyName") ?? "").trim(),
        ...(departmentOrTitle ? { departmentOrTitle } : {}),
        deliveryDuration: selected<DeliveryDuration>(
          data.get("deliveryDuration"),
          deliveryDurations.map(([value]) => value),
        ),
        potentialImpact: selected<PotentialImpact>(
          data.get("potentialImpact"),
          potentialImpacts.map(([value]) => value),
        ),
        projectDescription: String(data.get("projectDescription") ?? "").trim(),
        requestNda: data.get("requestNda") === "on",
      });
      if (errors?.length) {
        throw new Error(errors[0].message);
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email address
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Company name
        <input name="companyName" required autoComplete="organization" />
      </label>
      <label>
        Department or title
        <span className="field-hint">Optional</span>
        <input name="departmentOrTitle" autoComplete="organization-title" />
      </label>
      <label>
        Delivery duration
        <select name="deliveryDuration" required defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {deliveryDurations.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Potential impact
        <select name="potentialImpact" required defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {potentialImpacts.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label>
        Project description
        <textarea name="projectDescription" required placeholder="What are you trying to deliver?" />
      </label>
      <label className="inquiry-check">
        <input name="requestNda" type="checkbox" />
        <span>Request NDA before discussion</span>
      </label>
      <button className="primary-link" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send the note →"}
      </button>
      {status === "sent" && <p className="form-note">Received. I’ll reply by email.</p>}
      {status === "error" && (
        <p className="form-note">
          The form could not reach the backend yet. Email{" "}
          <a href="mailto:carl@deadpointhq.com">carl@deadpointhq.com</a>.
        </p>
      )}
    </form>
  );
}
