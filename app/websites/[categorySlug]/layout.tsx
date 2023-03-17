import { notFound } from "next/navigation";

import { fetchCategoryBySlug } from "#/lib/get-categories";
import { ClickCounter } from "#/ui/click-counter";
import { TabGroup } from "#/ui/tab-group";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) notFound();

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/websites/${category.slug}`}
          items={[
            {
              text: "All",
            },
            ...category.items.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
