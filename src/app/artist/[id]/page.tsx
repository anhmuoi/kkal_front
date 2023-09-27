"use client";

import ArtistDetail from "@/components/Pages/Artist/ArtistDetail";

const ViewDetailArtist = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <ArtistDetail />
        </>
    );
}

export default ViewDetailArtist;