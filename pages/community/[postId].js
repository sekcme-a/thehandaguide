import { createClient } from "lib/supabase/client";
import HeadMeta from "components/custom/HeadMeta";
import { formatTimestampzToKorean } from "utils/getRelativeTime";
import PostImages from "components/group/PostImages";
import PostLinks from "components/group/PostLinks";
import AppRedirectModal from "components/group/AppRedirectModal";
import BottomAppRedirect from "components/group/BottomAppRedirect";

import { CircularProgress } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Image from "next/image";
import { useState } from "react";

const Community = ({ postData, profileData, statisticsData }) => {
  const [showModal, setShowModal] = useState(true);

  if (!postData || !profileData) {
    return (
      <div className="flex justify-center mt-5 flex-wrap">
        <CircularProgress size="2rem" />
        <div className="w-full text-center mt-4 text-sm">로딩중입니다...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-black w-screen h-full">
      <HeadMeta
        title={`${postData.title} - 더한다`}
        description={postData.title}
        url={`https://thehanda.net/community/${postData.id}`}
        image={postData.images[0]}
      />
      <div className="w-full max-w-md bg-white text-black min-h-screen flex flex-col">
        <div className="flex justify-between px-3 py-2">
          <ArrowBackIosIcon
            className="text-gray-600"
            onClick={() => setShowModal(true)}
          />
          <MoreVertIcon
            className="text-gray-600"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="flex-1 px-3">
          <div className="text-sm text-gray-700 mt-1">{`카테고리 > ${postData.category}`}</div>
          <div className="flex mt-1.5">
            <div className="w-10 aspect-square relative">
              <Image
                src={profileData.image ?? "/images/default_profile.png"}
                alt={profileData.display_name}
                fill
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 pl-2">
              <div>{profileData.display_name}</div>
              <div className="text-gray-700 text-xs">
                {`조회 ${
                  statisticsData.view_count
                } | ${formatTimestampzToKorean(postData.created_at)}`}
              </div>
            </div>
          </div>

          <div className="mt-4 text-purple-800 text-sm">
            {postData.tags &&
              postData.tags.split(",").map((tag) => `#${tag}   `)}
          </div>
          <div className="font-bold text-xl">{postData.title}</div>
          <div className="mt-3 whitespace-pre-line leading-snug">
            {postData.text}
          </div>

          {postData.images && (
            <div className="mt-3">
              <PostImages images={postData.images} />
            </div>
          )}

          {postData.links && (
            <div className="mt-2">
              <PostLinks links={postData.links} />
            </div>
          )}

          <div
            className="rounded-4xl py-1 w-fit px-3 border border-gray-200 mt-4 flex items-center"
            onClick={() => setShowModal(true)}
          >
            <ThumbUpOffAltIcon
              className="text-gray-900 mr-1"
              fontSize="small"
            />
            {statisticsData.like_count}
          </div>
        </div>

        <div className="mt-5 w-full h-3 bg-gray-200" />
        <div className="px-3 pb-28">
          <div className="text-lg font-bold mt-4">
            {`댓글 ${statisticsData.comment_count}개`}
          </div>
          <div className="mt-5 text-center text-sm">
            💬 댓글은 앱에서만 확인하실 수 있어요!
          </div>
        </div>
      </div>

      <BottomAppRedirect
        scheme={`com.zzsoft.thehanda://(screen)/community/post/${postData.id}`}
      />
      <AppRedirectModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        scheme={`com.zzsoft.thehanda://(screen)/community/post/${postData.id}`}
      />
    </div>
  );
};

export default Community;

// ✅ SSR로 데이터 먼저 가져오기
export async function getServerSideProps(context) {
  const supabase = createClient();
  const { postId } = context.params;

  const { data: postData } = await supabase
    .from("posts")
    .select()
    .eq("id", postId)
    .single();

  if (!postData) {
    return { notFound: true };
  }

  const { data: profileData } = await supabase
    .from("profiles")
    .select("display_name, image")
    .eq("uid", postData.author_id)
    .single();

  const { data: statisticsData } = await supabase
    .from("post_statistics")
    .select("view_count, like_count, comment_count")
    .eq("post_id", postId)
    .single();

  return {
    props: {
      postData,
      profileData,
      statisticsData: statisticsData || {
        view_count: 0,
        like_count: 0,
        comment_count: 0,
      },
    },
  };
}
