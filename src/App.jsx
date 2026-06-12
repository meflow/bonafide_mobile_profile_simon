import simonProfile from './assets/simon_profile.png'
import bonafideosLogo from './assets/bonafideos_logo.png'
import simonEventBanner from './assets/simon_event_banner.png'

export default function App() {
  return (
    <div className="profile-card">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-photo-wrap">
          <img className="hero-photo" src={simonProfile} alt="프로필 사진" />
        </div>
        <div className="hero-overlay">
          <div className="hero-info-row">
            <div className="hero-name-block">
              <span className="hero-name">김상연</span>
              <span className="hero-subtitle">18년차 물리치료 실장</span>
              <span className="hero-subtitle">반듯한 정형외과 비서실장</span>
            </div>
            <img className="hero-logo" src={bonafideosLogo} alt="반듯한 정형외과 로고" />
          </div>
          <div className="hero-badge">
            <span className="hero-badge-text">반듯한 정형외과 비서 실장</span>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="contact-section">
        <a className="contact-row" href="tel:010-3129-8248">
          <span className="contact-label">휴대전화</span>
          <span className="contact-value">010-3129-8248</span>
          <span className="contact-arrow" />
        </a>
        <a className="contact-row" href="mailto:frecklesworks@gmail.com">
          <span className="contact-label">이메일</span>
          <span className="contact-value">frecklesworks@gmail.com</span>
          <span className="contact-arrow" />
        </a>
        <a className="contact-row" href="https://bonafidesj-snu.com" target="_blank" rel="noopener noreferrer">
          <span className="contact-label">홈페이지</span>
          <span className="contact-value">bonafidesj-snu.com</span>
          <span className="contact-arrow" />
        </a>
        <a className="contact-row" href="https://map.naver.com/v5/search/서울특별시 관악구 남부순환로 1832 오선빌딩" target="_blank" rel="noopener noreferrer">
          <span className="contact-label">주소</span>
          <span className="contact-value contact-value--addr">서울특별시 관악구 남부순환로 1832 오선빌딩 3층,4층,10층</span>
          <span className="contact-arrow" />
        </a>
      </section>

      {/* ── About ── */}
      <section className="about-section">

        <div className="about-intro">
          <h2 className="about-title">반듯한 정형외과 네트워크 비서실장 김상연 입니다</h2>
          <ul className="bullet-list">
            <li>물리치료사 18년 이상 임상 경력</li>
            <li>환자 중심의 응대, 의료 인력, 병원 운영 프로세스 최적화</li>
            <li>통증 치료부터 재활까지, 체계적 환자 맞춤형 케어 시스템</li>
          </ul>
        </div>

        <a className="kakao-btn" href="http://pf.kakao.com/_xikLxcxj" target="_blank" rel="noopener noreferrer">
          <span className="kakao-icon-bg">
            <span className="kakao-icon-shape"></span>
          </span>
          카카오톡 1:1 상담하기
        </a>

        <div className="desc-block">
          <h3 className="desc-title">반듯한 정형외과,<br />당신의 척추 관절 건강을 든든하게 지킵니다.</h3>
          <p className="desc-text">반듯한 정형외과 네트워크는 '바른 진단과 체계적인 케어'라는<br />가치 아래 환자분들의 건강한 일상을 지키기 위해 탄생했습니다.</p>
          <p className="desc-text">18년 임상 경험을 기반으로 통증으로 일상의 불편함을 겪는<br />환자분들의 고민을 '진심으로' 이해합니다.</p>
          <p className="desc-text">획일적 치료 대신, 우리 병원만의 차별화된 환자 맞춤형<br />관리 전략을 설계합니다.</p>
          <p className="desc-text">어떤 위험 앞에서도 흔들림 없는 든든한 건강 파트너가 되어,<br />처음부터 끝까지 반듯한 케어를 약속드립니다.</p>
        </div>

        <div className="services-block">
          <div className="services-header">
            <span className="services-icon"></span>
            <span className="services-label">주요 서비스</span>
          </div>
          <ul className="service-list">
            <li>
              <strong>맞춤형 환자 케어 컨설팅</strong><br />
              개인별 증상과 통증에 맞는 비수술·재활 치료 프로세스 안내
            </li>
            <li>
              <strong>병원 운영 및 CS 최적화</strong><br />
              대기 시간 단축 등 쾌적한 의료 서비스 환경 구축
            </li>
            <li>
              <strong>체계적인 사후 관리 시스템</strong><br />
              치료 후 일상 복귀까지 돕는 단계별 맞춤형 매뉴얼 운영
            </li>
          </ul>
        </div>

        <div className="cta-block">
          <p className="cta-title">당신에게 딱 맞는 의료 솔루션</p>
          <p className="cta-body">전문 물리치료사에게 상담해 보세요. 언제든 문의 주세요.</p>
        </div>

      </section>

      {/* ── Footer Banner ── */}
      <img className="footer-img" src={simonEventBanner} alt="이벤트 배너" />

    </div>
  )
}
