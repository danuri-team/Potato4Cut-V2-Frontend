const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

interface ApiError {
  message: string;
  status: number;
}
async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  console.log("[API REQUEST]", {
    method: options?.method ?? "GET",
    url,
    body: options?.body,
  });

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  const text = await response.text(); // 👈 한 번만 읽어야 함

  console.log("[API RESPONSE]", {
    url,
    status: response.status,
    ok: response.ok,
    body: text,
  });

  if (!response.ok) {
    throw {
      message: text || response.statusText,
      status: response.status,
    };
  }

  return text ? JSON.parse(text) : ({} as T);
}

export const api = {
  get: <T>(endpoint: string) => request<T>(endpoint, { method: "GET" }),
  post: <T>(endpoint: string, data: unknown) =>
    request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
