// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, AvatarImage, Avatar, Button, Input, Textarea, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui';
// @ts-ignore;
import { Camera, Edit, Settings, Shield, Bell, CreditCard, Calendar, CheckCircle, Package, ArrowRight } from 'lucide-react';

import { useForm } from 'react-hook-form';
import { UserCard } from '@/components/UserCard';
import { AccountInfo } from '@/components/AccountInfo';
import { OrderList } from '@/components/OrderList';
import { QuickSettings } from '@/components/QuickSettings';
export default function Profile(props) {
  const {
    toast
  } = useToast();
  const {
    currentUser
  } = props.$w.auth;
  const {
    navigateTo
  } = props.$w.utils;
  const [editMode, setEditMode] = useState(false);
  const [pagination, setPagination] = useState(1);
  const form = useForm({
    defaultValues: {
      name: currentUser?.name || '',
      nickName: currentUser?.nickName || '',
      bio: '热爱生活，追求卓越'
    }
  });
  const handleSaveProfile = async data => {
    try {
      toast({
        title: '保存成功',
        description: '您的个人信息已更新',
        variant: 'default'
      });
      setEditMode(false);
    } catch (error) {
      toast({
        title: '保存失败',
        description: error.message || '更新个人信息时发生错误',
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
  return <div className="min-h-screen bg-gradient-to-br from-[#E8F5E9] via-[#F0F3F4] to-[#E8F5E9]">
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C3E50] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-[#E8F5E9] font-serif text-2xl tracking-tight">个人中心</h1>
          </div>
          <Button onClick={() => handleNavigate('settings')} className="bg-[#3498DB] hover:bg-[#2980B9] text-white border-none">
            <Settings className="w-4 h-4 mr-2" />
            设置
          </Button>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          {/* 左侧用户信息区 - 占7列 */}
          <div className="col-span-7 col-start-2">
            <UserCard currentUser={currentUser} editMode={editMode} setEditMode={setEditMode} form={form} handleSaveProfile={handleSaveProfile} />

            {/* 订单记录 */}
            <div className="mt-6 bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#3498DB]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[#2C3E50] font-serif text-xl flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  我的订单
                </h2>
                <Button onClick={() => handleNavigate('orders', {
                status: 'all'
              })} className="text-[#3498DB] hover:text-[#2980B9] border-[#3498DB]">
                  查看全部
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <OrderList pagination={pagination} />
              <div className="mt-4 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious onClick={() => {
                      if (pagination > 1) setPagination(pagination - 1);
                    }} />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={() => {
                      setPagination(1);
                    }} className={pagination === 1 ? 'bg-[#3498DB] text-white' : ''}>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={() => {
                      setPagination(2);
                    }} className={pagination === 2 ? 'bg-[#3498DB] text-white' : ''}>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={() => {
                      setPagination(3);
                    }} className={pagination === 3 ? 'bg-[#3498DB] text-white' : ''}>
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext onClick={() => {
                      if (pagination < 10) setPagination(pagination + 1);
                    }} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>

          {/* 右侧账户信息和快捷设置 - 占3列 */}
          <div className="col-span-3">
            <AccountInfo currentUser={currentUser} />
            <div className="mt-4">
              <QuickSettings handleNavigate={handleNavigate} />
            </div>
          </div>
        </div>
      </main>
    </div>;
}