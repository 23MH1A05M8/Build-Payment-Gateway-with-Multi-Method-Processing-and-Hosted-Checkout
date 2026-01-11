<<<<<<< HEAD
const API_BASE = "http://localhost:8000/api/v1";

function authHeaders() {
  return {
    "Content-Type": "application/json",
    "X-Api-Key": localStorage.getItem("apiKey") || "key_test_abc123",
    "X-Api-Secret": localStorage.getItem("apiSecret") || "secret_test_xyz789"
  };
}

export async function createPayment(payload) {
  const res = await fetch(`${API_BASE}/payments`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Payment creation failed");
  }

  return res.json();
}

export async function getPayment(paymentId) {
  const res = await fetch(`${API_BASE}/payments/${paymentId}`, {
    headers: authHeaders()
  });

  if (!res.ok) {
    throw new Error("Failed to fetch payment status");
  }

=======
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
>>>>>>> 36ec6368d78e97828bcc779a54d4a8587fd2a9b5
  return res.json();
}

export async function getOrder(orderId) {
<<<<<<< HEAD
  const res = await fetch(`${API_BASE}/orders/${orderId}`, {
    headers: authHeaders()
  });

  if (!res.ok) {
    throw new Error("Order not found");
  }

=======
  const res = await fetch(`${API_BASE}/api/v1/orders/${orderId}`, {
    headers: HEADERS
  });
>>>>>>> 36ec6368d78e97828bcc779a54d4a8587fd2a9b5
  return res.json();
}
