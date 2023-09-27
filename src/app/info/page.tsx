"use client";
import InfoPage from "@/components/Pages/Info";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  return (
    <div className="info-page">
      <InfoPage />
    </div>
  );
};

export default ViewDetailBlog;
