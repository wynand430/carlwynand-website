import { FormEvent, useState } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const { errors } = await client.models.Inquiry.create({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        initiative: String(data.get("initiative") ?? ""),
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
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        The initiative
        <textarea name="initiative" required placeholder="What are you trying to deliver?" />
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
