import useDetail from '../../../hooks/api/useDetail';
import { useParams } from 'react-router';
import ProductInfo from './ProductInfo';
import ChartList from '../chart/Chart';

interface IProps {
  onLayer: (isOpenLayer: boolean) => void;
}

const ProductDetail = ({ onLayer }: IProps) => {
  const { productId } = useParams();
  const { data: detailData } = useDetail(Number(productId));

  if (!detailData) return null;
  // 상품차트 데이터
  const chartData = detailData.purchaseStatus;

  return (
    <>
      <ProductInfo data={detailData} onLayer={onLayer} />
      <ChartList data={chartData} />
    </>
  );
};

export default ProductDetail;
