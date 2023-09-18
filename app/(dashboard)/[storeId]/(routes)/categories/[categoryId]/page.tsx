import prismadb from "@/lib/prismadb"

import { CategoryForm } from "./components/category-form"

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.categoryId,
    },
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={billboard} />
      </div>
    </div>
  )
}

export default CategoryPage
