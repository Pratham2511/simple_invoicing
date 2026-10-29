import { useThemeStore, type ThemePreference } from '../store/useThemeStore';

const OPTIONS: { value: ThemePreference; label: string; hint: string }[] = [
  { value: 'system', label: 'System', hint: 'Follow your device setting' },
  { value: 'light', label: 'Light', hint: 'Always use the light theme' },
  { value: 'dark', label: 'Dark', hint: 'Always use the dark theme' },
];

export default function AppearancePage() {
  const preference = useThemeStore((s) => s.preference);
  const setPreference = useThemeStore((s) => s.setPreference);

  return (
    <div className="page-grid">
      <section className="page-hero">
        <div>
          <p className="eyebrow">Settings</p>
          <h1 className="page-title">Appearance</h1>
          <p className="section-copy">
            Choose how Simple Invoicing looks. The choice is saved in this browser only.
          </p>
        </div>
      </section>

      <section className="section-card">
        <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
          <legend className="eyebrow" style={{ padding: 0, marginBottom: '12px' }}>Theme</legend>
          <div style={{ display: 'grid', gap: '12px' }}>
            {OPTIONS.map((option) => {
              const id = `theme-${option.value}`;
              return (
                <div key={option.value} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    id={id}
                    name="theme"
                    value={option.value}
                    checked={preference === option.value}
                    onChange={() => setPreference(option.value)}
                    style={{ marginTop: '4px' }}
                  />
                  <label htmlFor={id} style={{ cursor: 'pointer' }}>
                    <strong>{option.label}</strong>
                    <span className="section-copy" style={{ display: 'block' }}>{option.hint}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>
      </section>
    </div>
  );
}
