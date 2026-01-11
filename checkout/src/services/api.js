const API_BASE = "http://localhost:8000";

const HEADERS = {
  "Content-Type": "application/json",
  "X-Api-Key": "key_test_abc123",
  "X-Api-Secret": "secret_test_xyz789"
};

export async function createPayment(payload) {
  const res = await fetch(`${API_BASE}/api/v1/payments`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function getPayment(id) {
  const res = await fetch(`${API_BASE}/api/v1/payments/${id}`, {
    headers: HEADERS
  });
  return res.json();
}

export async function getOrder(orderId) {
  const res = await fetch(`${API_BASE}/api/v1/orders/${orderId}`, {
    headers: HEADERS
  });
  return res.json();
}
