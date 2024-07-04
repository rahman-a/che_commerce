import abaya1 from '@/images/demo/products/abaya_1.png'
import abaya2 from '@/images/demo/products/abaya_2.png'
import abaya3 from '@/images/demo/products/abaya_3.png'
import abaya4 from '@/images/demo/products/abaya_4.png'
import abaya5 from '@/images/demo/products/abaya_5.png'
export const products = (t: any) => [
  {
    id: 1,
    src: abaya1,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
  },
  {
    id: 2,
    src: abaya2,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
    discount: 20,
  },
  {
    id: 3,
    src: abaya3,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
  },
  {
    id: 4,
    src: abaya4,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
    discount: 20,
  },
  {
    id: 5,
    src: abaya5,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
  },
  {
    id: 6,
    src: abaya3,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
  },
  {
    id: 7,
    src: abaya1,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
  },
  {
    id: 8,
    src: abaya4,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
    discount: 20,
  },
  {
    id: 9,
    src: abaya1,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
  },
  {
    id: 10,
    src: abaya2,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
    discount: 20,
  },
  {
    id: 11,
    src: abaya3,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
  },
  {
    id: 12,
    src: abaya4,
    alt: 'abaya',
    name: t('white_abaya'),
    description: t('special_design'),
    price: 100,
    discount: 20,
  },
]

export const demoProductDescription = {
  en: {
    title: 'The Product consist of Abaya, Dress and scarf',
    points: [
      { id: 1, text: 'color: Black' },
      { id: 2, text: 'Front opening design' },
      { id: 3, text: 'net bracelets' },
      { id: 4, text: 'sleeveless dress' },
      { id: 5, text: 'Dry Clean' },
    ],
  },
  ar: {
    title: 'المنتج يتكون من عباية وفستان وشال',
    points: [
      { id: 1, text: 'اللون: أسود' },
      { id: 2, text: 'تصميم فتحة أمامية' },
      { id: 3, text: 'أساور شبكية' },
      { id: 4, text: 'فستان بلا أكمام' },
      { id: 5, text: 'تنظيف جاف' },
    ],
  },
}

export const abayaTypes = (t: any) => [
  { id: 1, name: t('classic_abaya') },
  { id: 2, name: t('golden_embroidery_abaya') },
  { id: 3, name: t('black_abaya') },
  { id: 4, name: t('white_abaya') },
]

export const abayaSizes = (t: any) => [
  { id: 1, name: t('small') },
  { id: 2, name: t('medium') },
  { id: 3, name: t('large') },
  { id: 4, name: t('x_large') },
]
