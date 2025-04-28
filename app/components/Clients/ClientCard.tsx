import Image from "next/image";

type ClientCardProps = {
  firstName: string;
  lastName: string;
  companyName: string;
  avatarUrl: string;
  phone: string;
  email: string;
  status: string;
  onClick?: () => void;
};

export default function ClientCard({
  firstName,
  lastName,
  companyName,
  avatarUrl,
  phone,
  email,
  status,
  onClick,
}: ClientCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer max-w-sm bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] p-6 text-center space-y-4 transition hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.2)] hover:scale-[1.02]"
    >
      <div className="flex justify-center">
        <Image
          src={avatarUrl}
          alt={`${firstName} ${lastName}`}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold">
          {firstName} {lastName}
        </h2>
        <p className="text-sm text-gray-500">{companyName}</p>
        <p className="text-sm text-gray-500">{email}</p>
        <p className="text-sm text-gray-500">{phone}</p>
        <span
          className={`inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full ${
            status === "Actif"
              ? "bg-green-100 text-green-600"
              : status === "Inactif"
              ? "bg-gray-100 text-gray-500"
              : status === "Prospect"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
