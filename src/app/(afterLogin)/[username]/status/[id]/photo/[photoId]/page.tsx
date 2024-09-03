import PhotoDetailModal from "@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/page";
import HomePage from "@/app/(afterLogin)/home/page";

interface PhotoDetailPageProps {
  params: { username: string; id: string; photoId: string }; // slug들의 값을 params로 가져옴
}

export default function PhotoDetailPage({ params }: PhotoDetailPageProps) {
  params.username;
  params.id;
  params.photoId;
  return (
    <>
      <PhotoDetailModal />
      <HomePage />
    </>
  );
}
