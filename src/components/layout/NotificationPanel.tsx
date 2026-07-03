import { X, Check } from 'lucide-react';
import { notifications } from '../../data/mockData';

interface NotificationPanelProps {
  onClose: () => void;
}

export function NotificationPanel({ onClose }: NotificationPanelProps) {
  return (
    <>
      <div className="notification-panel-overlay" onClick={onClose} />
      <div className="notification-panel">
        <div className="notification-panel-header">
          <h2>Notifications</h2>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <button className="btn btn-ghost btn-xs">
              <Check size={12} />
              Mark all read
            </button>
            <button className="btn-icon" onClick={onClose} style={{ width: 28, height: 28 }}>
              <X size={14} />
            </button>
          </div>
        </div>

        <div className="notification-panel-content">
          {notifications.map(notif => (
            <div
              key={notif.id}
              className={`notification-item${!notif.read ? ' unread' : ''}`}
            >
              <span className={`notification-dot${notif.read ? ' read' : ''}`} />
              <div className="notification-body">
                <div className="notification-title">{notif.title}</div>
                <div className="notification-desc">{notif.description}</div>
                <div className="notification-time">{notif.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
