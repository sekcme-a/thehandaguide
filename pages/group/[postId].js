import { createClient } from "lib/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LanguageIcon from "@mui/icons-material/Language";
import { CircularProgress } from "@mui/material";
import { formatTimestampzToKorean } from "utils/getRelativeTime";
import PostImages from "components/group/PostImages";
import PostLinks from "components/group/PostLinks";
import AppRedirectModal from "components/group/AppRedirectModal";
import BottomAppRedirect from "components/group/BottomAppRedirect";
import HeadMeta from "components/custom/HeadMeta";

const Group = ({ postData, profileData, statisticsData }) => {
  const router = useRouter();
  const { postId } = router.query;

  const [post, setPost] = useState(postData);
  const [profile, setProfile] = useState(profileData);
  const [statistics, setStatistics] = useState(statisticsData);
  const [showModal, setShowModal] = useState(true);

  if (!post || !profile) {
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
        title={`${post.title} - 더한다`}
        description={post.title}
        url={`https://thehanda.net/group/${postId}`}
        image={post.images[0]}
      />
      <div className="relative w-full max-w-md bg-white text-black min-h-screen flex flex-col">
        <div
          className="absolute top-5 left-5 bg-white rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => setShowModal(true)}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </div>

        <PostImages images={post.images} isGroup />

        <div className="px-3">
          <div className="mt-3 font-bold text-lg">{post.title}</div>
          <div className="mt-1">{post.program_post_data?.subtitle}</div>
          {post.deadline && (
            <div className="text-xs">
              신청 마감일: {formatTimestampzToKorean(post.deadline)}
            </div>
          )}
          {post.program_post_data?.welcome?.length > 0 && (
            <div className="mt-3 font-bold text-sm">
              {post.program_post_data.welcome}
            </div>
          )}
          {post.program_post_data?.mainInfo?.length > 0 && (
            <div className="mt-2 px-2 py-3 bg-gray-100 rounded-lg border border-gray-200">
              <div className="text-sm">{post.program_post_data.mainInfo}</div>
            </div>
          )}

          {post.program_post_data?.info?.map((item, index) => (
            <div key={index} className="mt-4 pb-4 border-b border-gray-100">
              <div className="font-bold">{item.title}</div>
              <div className="mt-1 leading-snug whitespace-pre-line">
                {item.text}
              </div>
            </div>
          ))}

          {post.program_post_data?.quickLink?.length > 0 && (
            <>
              <div className="mt-4 font-bold">바로가기</div>
              <div className="overflow-x-auto mt-3 w-full">
                <div className="flex flex-nowrap">
                  {post.program_post_data.quickLink.map((item, index) => {
                    const isFullUrl =
                      item.text.startsWith("http://") ||
                      item.text.startsWith("https://");
                    const href = isFullUrl ? item.text : `https://${item.text}`;

                    return (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-3 w-[80px] text-inherit no-underline"
                      >
                        <div className="flex flex-col justify-center items-center">
                          <LanguageIcon />
                          <div className="w-full text-xs mt-1 text-center leading-tight">
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

// ✅ SSR 방식: getServerSideProps 추가
export async function getServerSideProps(context) {
  const supabase = createClient();
  const { postId } = context.params;

  const { data: postData } = await supabase
    .from("posts")
    .select()
    .eq("id", postId)
    .single();

  if (!postData) {
    return {
      notFound: true,
    };
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
      statisticsData: statisticsData || null,
    },
  };
}
