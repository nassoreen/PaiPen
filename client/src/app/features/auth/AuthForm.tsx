import { useState } from "react";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");

    try {
      // เชื่อม NestJS ภายหลัง
      console.log({ email, password });
    } catch {
      setError("ไม่สามารถเข้าสู่ระบบได้");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center">
        <h1 className="font-heading text-2xl font-bold">
          เข้าสู่ระบบ
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          เข้าสู่ระบบเพื่อเริ่มวางแผนการเดินทางกับ PaiPen
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          อีเมล
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="example@email.com"
          autoComplete="email"
          required
          className="h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          รหัสผ่าน
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="กรอกรหัสผ่าน"
          autoComplete="current-password"
          required
          className="h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="h-11 w-full rounded-lg bg-primary font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
      </button>

      <button
        type="button"
        className="w-full text-sm text-muted-foreground hover:text-foreground hover:underline"
      >
        ลืมรหัสผ่าน?
      </button>
    </form>
  );
}