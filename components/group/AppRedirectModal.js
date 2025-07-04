"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AppRedirectModal = ({ showModal, handleClose, scheme }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed bottom-0 left-0 z-50 w-screen h-screen items-end flex justify-center bg-black/50"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-md rounded-t-2xl p-6"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center">
              <Image
                width={60}
                height={60}
                src="/logo.png"
                alt="로고"
                className="rounded-lg"
              />
              <div className="ml-3">
                <div className="font-extrabold text-purple-900 text-lg">
                  더한다+
                </div>
                <div className=" text-gray-700 font-bold whitespace-pre-line leading-tight">
                  {`다문화가족을 위한 소통과 참여의 공간`}
                </div>
              </div>
            </div>
            <div className="text-gray-600 mb-6 mt-3 leading-snug text-sm">
              더 풍성하고 편리한 소통은 앱에서 만나보세요. 지금 앱을 설치하고
              다양한 기능과 혜택을 경험해 보세요!
            </div>
            <div
              onClick={() => {
                const androidStore =
                  "https://play.google.com/store/apps/details?id=com.zzsoft.thehanda&pcampaignid=web_share";
                const iosStore =
                  "https://apps.apple.com/kr/app/%EB%8D%94%ED%95%9C%EB%8B%A4/id1665555435";

                const isAndroid = /android/i.test(navigator.userAgent);
                const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

                const now = Date.now();

                // 앱 열기 시도
                window.location.href = scheme;

                // 일정 시간 뒤에도 반응 없으면 앱스토어로 이동
                setTimeout(() => {
                  if (Date.now() - now < 2000) {
                    window.location.href = isAndroid ? androidStore : iosStore;
                  }
                }, 1500);
              }}
              className="block w-full font-bold text-sm text-center bg-purple-800 text-white py-2 rounded-md"
              style={{ textDecoration: "none" }}
            >
              어플로 이동
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppRedirectModal;
