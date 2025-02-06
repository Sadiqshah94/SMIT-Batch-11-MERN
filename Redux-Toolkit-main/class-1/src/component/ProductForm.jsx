import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/featrues/productReducers";

export default function ProductForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state);
  console.log(allProducts);

  const handleAddProduct = (data) => {
    dispatch(addProduct(data));
  }



  return (
    <form onSubmit={handleSubmit(handleAddProduct)}>
      <input {...register("product_name",{ required: true })} />
      {errors.product_name && <span>name is required</span>}
      
      <input {...register("description", { required: true })} />
      {errors.description && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}