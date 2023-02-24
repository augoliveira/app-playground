import { fetchCategoryBySlug } from '#/lib/get-categories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';

<<<<<<< HEAD:app/layouts/[categorySlug]/layout.tsx
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
=======
export default async function Websites({ children, params }: PageProps) {
>>>>>>> 43e66e21525f83e5a8ac168def6981d56fc8ab20:app/websites/[categorySlug]/layout.tsx
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/websites/${category.slug}`}
          items={[
            {
              text: 'All',
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
