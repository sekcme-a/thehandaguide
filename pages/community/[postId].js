import { createClient } from "lib/supabase/client";
import { useEffect } from "react";
import { useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { formatTimestampzToKorean } from "utils/getRelativeTime";
import { useRouter } from "next/router";
import PostImages from "components/group/PostImages";
import PostLinks from "components/group/PostLinks";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AppRedirectModal from "components/group/AppRedirectModal";
import BottomAppRedirect from "components/group/BottomAppRedirect";

const Community = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [post, setPost] = useState(null);
  const [profile, setProfile] = useState(null);
  const [noPost, setNoPost] = useState(false);
  const [statistics, setStatistics] = useState(0);

  const [showModal, setShowModal] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (postId) fetchData();
  }, [postId]);
  const fetchData = async () => {
    const { data: postData } = await supabase
      .from("posts")
      .select()
      .eq("id", postId)
      .single();

    if (!postData) {
      setNoPost(true);
      return;
    }
    setPost(postData);

    const { data: author } = await supabase
      .from("profiles")
      .select("display_name, image")
      .eq("uid", postData.author_id)
      .single();
    setProfile(author);

    const { data, error } = await supabase
      .from("post_statistics")
      .select("view_count, like_count, comment_count")
      .eq("post_id", postId)
      .single();

    setStatistics(data);
  };

  return (
    <div className="flex justify-center bg-black w-screen h-full">
      <div className="w-full max-w-md bg-white text-black min-h-screen flex flex-col">
        <div className="flex justify-between px-3 py-2">
          <ArrowBackIosIcon
            className="text-gray-600 "
            onClick={() => setShowModal(true)}
          />
          <MoreVertIcon
            className="text-gray-600"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="flex-1 px-3">
          {noPost ? (
            <div className="flex justify-center mt-5 flex-wrap">
              <div className="w-full text-center mt-4 text-sm">
                게시글이 삭제되었거나 존재하지 않습니다.
              </div>
            </div>
          ) : !post || !profile ? (
            <div className="flex justify-center mt-5 flex-wrap">
              <CircularProgress size="2rem" />
              <div className="w-full text-center mt-4 text-sm">
                로딩중입니다...
              </div>
            </div>
          ) : (
            <>
              <div className="text-sm text-gray-700 mt-1">{`카테고리 > ${post.category}`}</div>
              <div className="flex  mt-1.5">
                <div className="w-10 aspect-square relative">
                  <Image
                    src={profile.image ?? "/images/default_profile.png"}
                    alt={profile.display_name}
                    fill
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-1 pl-2">
                  <div className="">{profile.display_name}</div>
                  <div className="text-gray-700 text-xs">{`조회 ${
                    statistics.view_count
                  } | ${formatTimestampzToKorean(post.created_at)}`}</div>
                </div>
              </div>

              <div className="mt-4 text-purple-800 text-sm">
                {post?.tags &&
                  post?.tags.split(",")?.map((tag) => `#${tag}   `)}
              </div>
              <div className="font-bold text-xl">{post.title}</div>
              <div className="mt-3 whitespace-pre-line leading-snug">
                {post.text}
              </div>
              {post.images && (
                <div className="mt-3">
                  <PostImages images={post.images} />
                </div>
              )}
              {post.links && (
                <div className="mt-2">
                  <PostLinks links={post.links} />
                </div>
              )}

              <div
                className="rounded-4xl py-1  w-fit px-3
              border-[1px] border-gray-200 mt-4 flex items-center"
                onClick={() => setShowModal(true)}
              >
                <ThumbUpOffAltIcon
                  className="text-gray-900 mr-1"
                  fontSize="small"
                />
                {statistics.like_count}
              </div>
            </>
          )}
        </div>
        <div className="mt-5 w-full h-3 bg-gray-200" />
        <div className="px-3 pb-28">
          <div className="text-lg font-bold mt-4">
            {`댓글 ${statistics.comment_count}개`}
          </div>
          <div className="mt-5 text-center text-sm">
            💬 댓글은 앱에서만 확인하실 수 있어요!
          </div>
        </div>
      </div>

      <BottomAppRedirect
        scheme={`com.zzsoft.thehanda://(screen)/community/post/${postId}`}
      />
      <AppRedirectModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        scheme={`com.zzsoft.thehanda://(screen)/community/post/${postId}`}
      />
    </div>
  );
};

export default Community;
