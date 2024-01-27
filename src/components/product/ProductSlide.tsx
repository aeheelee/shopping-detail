import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import { ProductItemsType } from '../../types/CommonTypes';

interface IProps {
  data: ProductItemsType[];
  swiperName: string;
}

const ProductSlide = ({ data, swiperName }: IProps) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      breakpoints={{ 900: { slidesPerView: 5, spaceBetween: 10 } }}
      navigation={true}
      modules={[Navigation]}
      className={swiperName}
    >
      {data.map((product) => (
        <SwiperSlide key={`recomm-${product.id}`}>
          <ProductCard data={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlide;
