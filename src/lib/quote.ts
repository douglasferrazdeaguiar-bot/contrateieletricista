import { z } from "zod";

export const normalizeBrazilianPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  return (digits.length === 12 || digits.length === 13) && digits.startsWith("55")
    ? digits.slice(2)
    : digits;
};

export const phoneSchema = z.string().transform(normalizeBrazilianPhone).pipe(
  z.string().regex(/^\d{10,11}$/, "Informe um telefone com DDD e 10 ou 11 dígitos. O +55 é opcional.")
);

export const formatBrazilianPhone = (value: string): string => {
  const parsed = phoneSchema.safeParse(value);
  if (!parsed.success) return value;
  const digits = parsed.data;
  const split = digits.length === 11 ? 7 : 6;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, split)}-${digits.slice(split)}`;
};

export const buildQuoteWhatsAppUrl = (details: {
  name: string; phone: string; service: string; city: string; description: string; date: string;
}): string => {
  const phone = phoneSchema.parse(details.phone);
  const lines = [
    "Olá! Vim pelo site da CONTRATEI e gostaria de solicitar um orçamento.",
    "",
    `Nome: ${details.name.trim()}`,
    `Telefone: ${formatBrazilianPhone(phone)}`,
    `Serviço: ${details.service}`,
    `Cidade/Região: ${details.city.trim()}`,
  ];
  if (details.description.trim()) lines.push(`Descrição: ${details.description.trim()}`);
  if (details.date) lines.push(`Preferência de data: ${details.date}`);
  return `https://wa.me/5561996339282?text=${encodeURIComponent(lines.join("\n"))}`;
};