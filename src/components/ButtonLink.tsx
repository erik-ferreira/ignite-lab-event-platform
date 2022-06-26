import { AnchorHTMLAttributes } from "react";
import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  hideIcon?: boolean;
}

export function ButtonLink({
  variant = "primary",
  hideIcon = false,
  ...rest
}: ButtonLinkProps) {
  return variant === "primary" ? (
    <a
      className="p-4 text-sm bg-green-500 flex items-center justify-center gap-2 rounded font-bold uppercase hover:bg-green-700 transition-colors"
      {...rest}
    >
      {!hideIcon && <DiscordLogo size={24} />}
      Comunidade do Discord
    </a>
  ) : (
    <a
      className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center justify-center gap-2 rounded font-bold uppercase hover:bg-blue-500 hover:text-gray-900 transition-colors"
      {...rest}
    >
      {!hideIcon && <Lightning size={24} />}
      Acesse o Desafio
    </a>
  );
}
