import React, { useState, useCallback } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

let toastId = 0;

// Shared toast state (module-level for simplicity)
let _setToasts = null;

export function showToast(message, type = 'success') {
  if (_setToasts) {
    const id = ++toastId;
    _setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      _setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  _setToasts = setToasts;

  const remove = (id) => setToasts(prev => prev.filter(t => t.id !== id));

  return (
    <div className="toast-container">
      {toasts.map(toast => {
        const Icon = icons[toast.type] || Info;
        return (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <Icon size={17} />
            <span style={{ flex: 1 }}>{toast.message}</span>
            <button
              onClick={() => remove(toast.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, display: 'flex' }}
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
