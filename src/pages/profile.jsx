// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast, Avatar, AvatarImage, AvatarFallback, Button } from '@/components/ui';
// @ts-ignore;
import { Settings, Bell, Shield, User, LogOut, ChevronRight } from 'lucide-react';

import { ProfileCard } from '@/components/ProfileCard.jsx';
import { FunctionMenu } from '@/components/FunctionMenu.jsx';
export default function Profile(props) {
  const {
    toast
  } = useToast();
  const currentUser = props.$w.auth.currentUser || {};
  const navigateTo = props.$w.utils.navigateTo;
  const handleLogout = async () => {
    try {
      toast({
        title: '正在退出登录...',
        description: '请稍候'
      });

      // 调用云开发退出登录
      const tcb = await props.$w.cloud.getCloudInstance();
      await tcb.auth.signOut();
      toast({
        title: '退出成功',
        description: '您已成功退出登录',
        variant: 'default'
      });

      // 跳转到登录页面
      navigateTo({
        pageId: 'home',
        params: {}
      });
    } catch (error) {
      toast({
        title: '退出失败',
        description: error.message || '退出登录时发生错误，请重试',
        variant: 'destructive'
      });
    }
  };
  const handleNavigate = (pageId, params = {}) => {
    navigateTo({
      pageId,
      params
    });
  };
  return <div className="min-h-screen bg-[#1a1a2e] relative">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-br from-[#0f3460] to-[#1a1a2e] opacity-60"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#e94546] rounded-full opacity-10 blur-50"></div>
      <div className="absolute top-40 left-20 w-24 h-24 bg-[#0f3460] rounded-full opacity-10 blur-40"></div>

      {/* 主内容区域 */}
      <div className="relative grid grid-cols-12 gap-6 px-6 py-12 max-w-7xl mx-auto">
        {/* 左侧用户信息区域 */}
        <div className="col-span-7 col-start-2">
          <ProfileCard currentUser={currentUser} />

          {/* 详细信息卡片 */}
          <div className="mt-6 bg-[#16213e] rounded-2xl p-6 border border-[#0f3460]">
            <h3 className="text-[#f1f1f1] text-lg font-semibold mb-4 font-montserrat">
              账户信息
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-[#0f3460]/30">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#0f3460]" />
                  <span className="text-[#f1f1f1]/70 font-opensans">用户类型</span>
                </div>
                <span className="text-[#f1f1f1] font-semibold font-montserrat">
                  {currentUser.type || '普通用户'}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#0f3460]/30">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#0f3460]" />
                  <span className="text-[#f1f1f1]/70 font-opensans">用户ID</span>
                </div>
                <span className="text-[#f1f1f1] font-semibold font-montserrat">
                  {currentUser.userId || '未登录'}
                </span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-[#0f3460]" />
                  <span className="text-[#f1f1f1]/70 font-opensans">昵称</span>
                </div>
                <span className="text-[#f1f1f1] font-semibold font-montserrat">
                  {currentUser.nickName || currentUser.name || '未设置'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧功能菜单区域 */}
        <div className="col-span-5">
          <FunctionMenu onNavigate={handleNavigate} />

          {/* 退出登录卡片 */}
          <div className="mt-6 bg-[#16213e] rounded-2xl p-6 border border-[#0f3460]">
            <Button onClick={handleLogout} className="w-full bg-[#e94546] hover:bg-[#e94546]/90 text-white py-3 rounded-xl font-montserrat font-semibold">
              <LogOut className="w-5 h-5 mr-2" />
              退出登录
            </Button>
          </div>

          {/* 系统信息卡片 */}
          <div className="mt-4 bg-[#16213e]/50 rounded-2xl p-4 border border-[#0f3460]/30">
            <p className="text-[#f1f1f1]/50 text-sm font-opensans text-center">
              当前时间：{new Date().toLocaleString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
            </p>
          </div>
        </div>
      </div>
    </div>;
}