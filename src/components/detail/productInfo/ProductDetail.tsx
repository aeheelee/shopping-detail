import useDetail from '../../../hooks/api/useDetail';
import { useParams } from 'react-router';
import ProductInfo from './ProductInfo';
import ChartList from '../chart/ChartList';

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: detailData } = useDetail(Number(productId));

  if (!detailData) return null;
  // 상품차트 데이터
  const chartData = detailData.purchaseStatus;

  return (
    <>
      <ProductInfo data={detailData} />
      <ChartList data={chartData} />
    </>
  );
};

export default ProductDetail;
