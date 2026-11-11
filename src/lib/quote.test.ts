import { describe, expect, test } from "bun:test";
import { buildQuoteWhatsAppUrl, formatBrazilianPhone, phoneSchema } from "./quote";

describe("Brazilian phone input", () => {
  test.each([
    ["+55 (61) 91234-5678", "61912345678", "(61) 91234-5678"],
    ["(61) 3234-5678", "6132345678", "(61) 3234-5678"],
    ["556132345678", "6132345678", "(61) 3234-5678"],
    ["61912345678", "61912345678", "(61) 91234-5678"],
  ])("preserves the full number %s", (input, normalized, formatted) => {
    expect(phoneSchema.parse(input)).toBe(normalized);
    expect(formatBrazilianPhone(input)).toBe(formatted);
    const url = new URL(buildQuoteWhatsAppUrl({ name: "Cliente teste", phone: input,
      service: "Iluminação", city: "Brasília", description: "", date: "" }));
    expect(url.origin + url.pathname).toBe("https://wa.me/5561996339282");
    expect(url.searchParams.get("text")).toContain(`Telefone: ${formatted}`);
  });
  test.each(["", "619123456", "619123456789", "+55 (61) 91234-56789"])("rejects invalid length without truncating %s", (input) => {
    expect(phoneSchema.safeParse(input).success).toBe(false);
    expect(formatBrazilianPhone(input)).toBe(input);
  });
});