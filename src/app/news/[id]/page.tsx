"use client";

import NewsDetail from "@/components/Pages/News/NewsDetailPage";

const ViewDetailNews = ({ params }: { params: { id: string } }) => {
  return (
    <div className="news-detail">
      <NewsDetail />
    </div>
  );
};

export default ViewDetailNews;
