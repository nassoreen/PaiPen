import { AuthForm } from "@/app/features/auth";

export function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-violet-700">
            PaiPen
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            วางแผนการเดินทางได้ง่ายขึ้น
          </p>
        </div>

        <AuthForm />
      </div>
    </main>
  );
}