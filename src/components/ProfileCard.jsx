// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Avatar, AvatarImage, AvatarFallback, Button } from '@/components/ui';
// @ts-ignore;
import { Edit, Camera } from 'lucide-react';

export function ProfileCard({
  currentUser
}) {
  const handleEditProfile = () => {
    // TODO: 实现编辑个人资料功能
  };
  return <div className="bg-[#16213e] rounded-2xl p-8 border border-[#0f3460] shadow-xl relative overflow-hidden">
      {/* 装饰元素 */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#e94546] rounded-full opacity-5 blur-60"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#0f3460] rounded-full opacity-10 blur-30"></div>

      {/* 头像区域 */}
      <div className="flex items-center gap-6 mb-6 relative z-10">
        <div className="relative">
          <Avatar className="w-20 h-20 rounded-full border-3 border-[#0f3460]">
            {currentUser.avatarUrl ? <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name || '用户头像'} /> : <AvatarFallback className="bg-[#0f3460] text-[#f1f1f1] text-xl font-semibold">
                {(currentUser.name || currentUser.nickName || '用户').charAt(0)}
              </AvatarFallback>}
          </Avatar>
          <Button size="sm" className="absolute -bottom-2 -right-2 bg-[#e94546] hover:bg-[#e94546]/90 rounded-full p-2" onClick={handleEditProfile}>
            <Camera className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex-1">
          <h2 className="text-[#f1f1f1] text-2xl font-bold font-montserrat mb-1">
            {currentUser.name || '未设置姓名'}
          </h2>
          <p className="text-[#f1f1f1]/60 text-sm font-opensans">
            {currentUser.nickName || '未设置昵称'}
          </p>
        </div>
      </div>

      {/* 用户信息 */}
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between py-2">
          <span className="text-[#f1f1f1]/60 font-opensans text-sm">用户ID</span>
          <span className="text-[#f1f1f1] font-montserrat text-sm">
            {currentUser.userId || '未登录'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-[#f1f1f1]/60 font-opensans text-sm">账户状态</span>
          <span className="text-[#0f3460] font-montserrat text-sm font-semibold">
            正常
          </span>
        </div>
      </div>

      {/* 编辑按钮 */}
      <Button onClick={handleEditProfile} className="mt-4 w-full bg-[#0f3460] hover:bg-[#0f3460]/90 text-white py-2 rounded-xl font-opensans">
        <Edit className="w-4 h-4 mr-2" />
        编辑个人资料
      </Button>
    </div>;
}