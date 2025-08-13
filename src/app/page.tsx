export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">집</span>
              </div>
              <span className="text-xl font-bold text-gray-900">집안일 스케줄러</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">기능</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">요금제</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">문의</a>
            </nav>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
              무료 시작하기
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              집안일을 <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">스마트하게</span>
              <br />관리하세요
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              일간, 주간, 월간, 계절별, 연간 할일을 체계적으로 관리하고, 
              가족 구성원끼리 협력하며 포인트로 보상받는 스마트한 집안일 관리 시스템
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                무료로 시작하기
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                데모 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              왜 집안일 스케줄러일까요?
            </h2>
            <p className="text-xl text-gray-600">
              체계적인 일정 관리부터 가족 포인트 시스템까지, 집안일이 재미있어집니다
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5단계 주기별 관리</h3>
              <p className="text-gray-600">
                <strong>Daily</strong> (매일), <strong>Weekly</strong> (주간), <strong>Monthly</strong> (월간), 
                <strong>Seasonal</strong> (계절별), <strong>Yearly</strong> (연간) 할일을 체계적으로 분류하고 관리하세요.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">가전제품 등록 시스템</h3>
              <p className="text-gray-600">
                세탁기, 청소기, 에어컨 등 가전제품을 등록하면 자동으로 관련 할일이 생성되어 
                놓치기 쉬운 관리 작업을 체계적으로 알려드립니다.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">스마트 할일 배분</h3>
              <p className="text-gray-600">
                가족 구성원의 능력, 선호도, 일정을 고려하여 AI가 최적의 할일 배분을 제안하고
                실시간으로 진행 상황을 공유합니다.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">가족 포인트 보상</h3>
              <p className="text-gray-600">
                집안일 완료 시 포인트를 획득하고, 가족 구성원 간 순위를 확인하며
                포인트로 다양한 보상을 받을 수 있는 재미있는 시스템입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              어떻게 작동하나요?
            </h2>
            <p className="text-xl text-gray-600">
              3단계로 시작하는 스마트한 집안일 관리
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">가전제품 & 가족 등록</h3>
              <p className="text-gray-600">
                집에 있는 가전제품들과 가족 구성원을 등록하고, 
                각자의 선호도와 가능한 시간을 설정하세요.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI 스케줄 생성</h3>
              <p className="text-gray-600">
                등록된 정보를 바탕으로 AI가 Daily부터 Yearly까지 
                최적화된 집안일 스케줄을 자동으로 생성합니다.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">완료 & 포인트 획득</h3>
              <p className="text-gray-600">
                할일을 완료하고 포인트를 획득하세요. 
                가족 순위를 확인하고 보상을 받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                주기별 할일 관리
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">D</span>
                  </div>
                  <span className="text-lg"><strong>Daily:</strong> 설거지, 쓰레기 버리기, 침실 정리</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">W</span>
                  </div>
                  <span className="text-lg"><strong>Weekly:</strong> 빨래, 청소기 돌리기, 화장실 청소</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">M</span>
                  </div>
                  <span className="text-lg"><strong>Monthly:</strong> 에어컨 필터 청소, 냉장고 정리</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                  <span className="text-lg"><strong>Seasonal:</strong> 이불 세탁, 옷장 정리, 난방기 점검</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Y</span>
                  </div>
                  <span className="text-lg"><strong>Yearly:</strong> 가전제품 점검, 집 전체 대청소</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏆 가족 포인트 시스템</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👑</span>
                    </div>
                    <div>
                      <p className="font-semibold">엄마</p>
                      <p className="text-sm text-gray-600">이번 주 MVP</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-yellow-500">2,450P</span>
                </div>
                
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👨</span>
                    </div>
                    <div>
                      <p className="font-semibold">아빠</p>
                      <p className="text-sm text-gray-600">청소 마스터</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-blue-500">1,890P</span>
                </div>
                
                <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👧</span>
                    </div>
                    <div>
                      <p className="font-semibold">딸</p>
                      <p className="text-sm text-gray-600">정리의 달인</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-green-500">1,220P</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                <p className="text-sm text-purple-800 font-medium">💡 포인트로 할 수 있는 것들:</p>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• 좋아하는 음식 주문하기 (500P)</li>
                  <li>• 영화 관람권 교환 (800P)</li>
                  <li>• 하루 집안일 면제권 (1000P)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            30일 무료 체험으로 더 스마트한 집안일 관리를 경험해보세요
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:shadow-lg transition-all duration-300">
            무료 체험 시작하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">집</span>
                </div>
                <span className="text-xl font-bold">집안일 스케줄러</span>
              </div>
              <p className="text-gray-400">
                가족 모두가 함께하는 스마트한 집안일 관리
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">제품</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">기능</a></li>
                <li><a href="#" className="hover:text-white transition-colors">요금제</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">지원</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">도움말</a></li>
                <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
                <li><a href="#" className="hover:text-white transition-colors">커뮤니티</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">회사</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
                <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 집안일 스케줄러. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
