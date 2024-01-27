import useDetail from '../../../hooks/api/useDetail';
import { useParams } from 'react-router';
import LoadingIndicator from '../../LoadingIndicator';
import ProductInfo from './ProductInfo';
import ChartList from '../chart/Chart';

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: detailData, isLoading: isLoadingDetail = true } = useDetail(Number(productId));

  if (!detailData) return null;
  // 상품차트 데이터
  const chartData = detailData.purchaseStatus;

  return (
    <>
      {isLoadingDetail ? (
        <LoadingIndicator />
      ) : (
        <>
          <ProductInfo data={detailData} />
          <ChartList data={chartData} />
        </>
      )}
    </>
  );
};

export default ProductDetail;
