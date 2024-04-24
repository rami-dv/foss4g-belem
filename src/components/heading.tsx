export default function Heading({
  label,
  bubble = false,
  color = null,
  children = null,
}: {
  label: string;
  bubble?: boolean | null;
  color?: "green" | "orange" | "red" | "blue" | null;
  children: React.ReactNode | null;
}) {
  // doing it this way for the tailwind jit compiler
  // https://tailwindcss.com/docs/content-configuration#dynamic-class-names

  const borders = {
    green: "border-f4g_green",
    red: "border-f4g_red",
    orange: "border-f4g_orange",
    blue: "border-f4g_blue",
  };
  const text = {
    green: "text-f4g_green",
    red: "text-f4g_red",
    orange: "text-f4g_orange",
    blue: "text-f4g_blue",
  };

  const bubbleClasses = bubble ? "sm:border-2 bg-white": "";

  return (
    <div className="flex items-center my-6 sm:my-8">
      <div className={`flex-1 border-t-2 ${borders[color ?? "red"]}`}></div>
      <div
        className={`text-2xl sm:text-4xl ${bubbleClasses} ${borders[color ?? "red"]} rounded-lg sm:py-2 text-center font-bold font-ubuntu ${
          text[color ?? "red"]
        } px-2 sm:px-4 sm:mx-4`}
      >
        {children}
      </div>
      <div className={`flex-1 border-t-2 ${borders[color ?? "red"]}`}></div>
    </div>
  );
}
