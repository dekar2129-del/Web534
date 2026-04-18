import { ReactNode } from "react";

export const PageHero = ({ title, subtitle }: { title: string | ReactNode, subtitle?: string }) => {
  return (
    <section className="pt-48 pb-24 px-4 bg-light/30">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold italic mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed italic">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
