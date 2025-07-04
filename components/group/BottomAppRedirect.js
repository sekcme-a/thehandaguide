const BottomAppRedirect = ({ scheme, isGroup }) => {
  return (
    <div className="fixed bottom-0 left-0 w-screen flex justify-center">
      <div className="max-w-md w-full px-3 bg-white py-2 shadow-2xl border-t-[2px] border-t-gray-200 rounded-t-3xl">
        <div className="text-sm text-center text-black mt-2">
          {isGroup ? (
            <>
              <strong>더한다</strong> 앱에서 해당 <strong>프로그램</strong>을{" "}
              <strong>신청</strong>할 수 있어요!
            </>
          ) : (
            <>
              <strong>더한다</strong> 앱에서 더 많은 <strong>이야기</strong>와{" "}
              <strong>소통</strong>이 기다리고 있어요!
            </>
          )}
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
          className="text-center mt-3 text-sm bg-purple-800 text-white py-2.5 rounded-lg font-semibold"
        >
          어플로 이동
        </div>
      </div>
    </div>
  );
};

export default BottomAppRedirect;
