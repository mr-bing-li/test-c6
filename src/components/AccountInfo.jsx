// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { CreditCard, Calendar, Star, Gift } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

export function AccountInfo({
  currentUser
}) {
  return <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1ABC9C]">
      <h2 className="text-[#2C3E50] font-serif text-xl mb-4">账户信息</h2>
      <div className="space-y-4">
        {/* 会员等级 */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#E8F5E9] to-[#F0F3F4] rounded-lg">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#3498DB]" />
            <span className="text-[#2C3E50] font-sans">会员等级</span>
          </div>
          <span className="text-[#3498DB] font-sans font-semibold">黄金会员</span>
        </div>

        {/* 积分 */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#E8F5E9] to-[#F0F3F4] rounded-lg">
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-[#1ABC9C]" />
            <span className="text-[#2C3E50] font-sans">积分余额</span>
          </div>
          <span className="text-[#1ABC9C] font-sans font-semibold">12,580</span>
        </div>

        {/* 优惠券 */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#E8F5E9] to-[#F0F3F4] rounded-lg">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#2C3E50]" />
            <span className="text-[#2C3E50] font-sans">优惠券</span>
          </div>
          <span className="text-[#2C3E50] font-sans font-semibold">3 张可用</span>
        </div>

        {/* 注册时间 */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#E8F5E9] to-[#F0F3F4] rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#95A5A6]" />
            <span className="text-[#2C3E50] font-sans">注册时间</span>
          </div>
          <span className="text-[#95A5A6] font-sans">2024-03-15</span>
        </div>
      </div>

      <Button className="w-full mt-4 bg-[#2C3E50] hover:bg-[#1A252F] text-white border-none">
        查看会员权益
      </Button>
    </div>;
}