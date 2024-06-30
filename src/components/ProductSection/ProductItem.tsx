import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

function ProductItem({position}:{position:'left' | 'right'}) {
  return <section className="flex flex-col lg:flex-row justify-between items-center ">
    {position == 'left' && <div className="w-full lg:w-[400px]"><Image src={"/product.PNG"} width={1920} height={1080} alt='' className="rounded-xl"/></div>}
    <div className="w-full flex flex-col gap-2 lg:w-[500px]">
        <p className="text-[32px] font-semibold">Head Spa</p>
        <p>Dưỡng sinh là phương pháp chăm sóc sức khỏe cổ truyền kết hợp giữa y học cổ truyền và các phương pháp trị liệu hiện đại. Gội đầu dưỡng sinh không chỉ là việc làm sạch tóc mà còn là một trải nghiệm thư giãn và chăm sóc toàn diện cho sức khỏe của bạn. Phương pháp này thường bắt đầu bằng việc sử dụng các loại thảo dược thiên nhiên và tinh dầu để làm sạch da đầu và tóc, giúp loại bỏ bụi bẩn, bã nhờn, và các tạp chất tích tụ.</p>
    <Button className="w-[200px] mt-5 hover:bg-warning-400" radius="full"  >Learn more</Button>
    </div>
    {position == 'right' && <div className="w-full lg:w-[400px]"><Image src={"/product.PNG"} width={1920} height={1080} alt='' className="rounded-xl"/></div>}


  </section>;
}

export default ProductItem;
