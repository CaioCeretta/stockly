import { cachedGetProducts } from '@/_data/dal/product/get-products'
import { DataTable } from '../_components/ui/data-table'
import AddProductButton from './_components/create-product-button'
import { productTableColumns } from './_components/table-columns'
import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from '../_components/header'

const ProductsPage = async () => {
  const products = await cachedGetProducts()

  return (
    <div className="ml-8 mt-8 w-full space-y-8 overflow-auto bg-white p-8 py-8">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Products Management</HeaderTitle>
          <HeaderSubtitle>Products</HeaderSubtitle>
        </HeaderLeft>
        <HeaderRight>
          <AddProductButton />
        </HeaderRight>
      </Header>

      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  )
}

export default ProductsPage
