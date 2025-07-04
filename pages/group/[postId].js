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

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LanguageIcon from "@mui/icons-material/Language";
import HeadMeta from "components/custom/HeadMeta";
const Group = () => {
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
      <HeadMeta
        title={`${post?.title} - 더한다`}
        description={post?.title}
        url={`https://thehanda.net/group/${postId}`}
      />
      <div className="relative w-full max-w-md bg-white text-black min-h-screen flex flex-col">
        <div
          className="absolute top-5 left-5 bg-white rounded-full 
        h-7 w-7 flex justify-center items-center "
          onClick={() => setShowModal(true)}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </div>
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
            <PostImages images={post.images} isGroup />
            <div className="px-3">
              <div className="mt-3 font-bold text-lg">{post.title}</div>
              <div className="mt-1">{post.program_post_data?.subtitle}</div>
              {!post.deadline && (
                <div className=" text-xs">
                  신청 마감일: {formatTimestampzToKorean(post.deadline)}
                </div>
              )}
              {post.program_post_data?.welcome?.length > 0 && (
                <div className="mt-3 font-bold text-sm">
                  {post.program_post_data?.welcome}
                </div>
              )}
              {post.program_post_data?.mainInfo?.length > 0 && (
                <div
                  className="mt-2 px-2 py-3 bg-gray-100 
                rounded-lg border-[1px] border-gray-200"
                >
                  <div className="text-sm">
                    {post.program_post_data?.mainInfo}
                  </div>
                </div>
              )}

              {post.program_post_data?.info?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mt-4 pb-4 border-b-[1px] border-b-gray-100"
                  >
                    <div className="font-bold">{item.title}</div>
                    <div className="mt-1 leading-snug whitespace-pre-line">
                      {item.text}
                    </div>
                  </div>
                );
              })}
              {post.program_post_data?.quickLink?.length > 0 && (
                <>
                  <div className="mt-4 font-bold">바로가기</div>
                  <div className="overflow-x-auto mt-3 w-full">
                    <div className="flex flex-nowrap">
                      {post.program_post_data?.quickLink?.map((item, index) => {
                        const isFullUrl =
                          item.text.startsWith("http://") ||
                          item.text.startsWith("https://");
                        const href = isFullUrl
                          ? item.text
                          : `https://${item.text}`;

                        return (
                          <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-3 w-[80px] text-inherit no-underline"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="flex flex-col justify-center items-center">
                              <LanguageIcon />
                              <div className="w-full text-xs no-underline mt-1 text-center leading-tight">
                                {item.title}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              <div className="h-32" />
            </div>
          </>
        )}
      </div>

      <BottomAppRedirect
        scheme={`com.zzsoft.thehanda://(screen)/group/post/${postId}`}
        isGroup
      />
      <AppRedirectModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        scheme={`com.zzsoft.thehanda://(screen)/group/post/${postId}`}
      />
    </div>
  );
};

export default Group;
