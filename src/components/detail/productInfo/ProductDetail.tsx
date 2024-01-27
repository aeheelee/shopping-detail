import useDetail from '../../../hooks/api/useDetail';
import { useParams } from 'react-router';
import LoadingIndicator from '../../LoadingIndicator';
import ProductInfo from './ProductInfo';

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: detailData, isLoading: isLoadingDetail = true } = useDetail(Number(productId));

  if (!detailData) return null;

  return <>{isLoadingDetail ? <LoadingIndicator /> : <ProductInfo data={detailData} />}</>;
};

export default ProductDetail;
