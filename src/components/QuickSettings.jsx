// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Shield, Bell, CreditCard, User, HelpCircle, ArrowRight } from 'lucide-react';

export function QuickSettings({
  handleNavigate
}) {
  const settings = [{
    icon: Shield,
    title: '账号安全',
    description: '密码、实名认证',
    pageId: 'security',
    color: 'bg-[#2C3E50]'
  }, {
    icon: Bell,
    title: '消息通知',
    description: '推送设置',
    pageId: 'notifications',
    color: 'bg-[#3498DB]'
  }, {
    icon: CreditCard,
    title: '支付管理',
    description: '银行卡、支付方式',
    pageId: 'payment',
    color: 'bg-[#1ABC9C]'
  }, {
    icon: User,
    title: '隐私设置',
    description: '数据权限',
    pageId: 'privacy',
    color: 'bg-[#95A5A6]'
  }, {
    icon: HelpCircle,
    title: '帮助中心',
    description: '常见问题',
    pageId: 'help',
    color: 'bg-[#2C3E50]'
  }];
  return <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#3498DB]">
      <h2 className="text-[#2C3E50] font-serif text-xl mb-4">快捷设置</h2>
      <div className="space-y-3">
        {settings.map(setting => <Button key={setting.title} onClick={() => handleNavigate(setting.pageId)} className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#F0F3F4] to-[#E8F5E9] hover:from-[#E8F5E9] hover:to-[#F0F3F4] border-[#2C3E50] text-[#2C3E50] hover:text-[#3498DB] transition-all">
            <div className="flex items-center gap-3">
              <div className={`${setting.color} rounded-full p-2`}>
                <setting.icon className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <span className="font-serif font-semibold text-sm">{setting.title}</span>
                <span className="font-sans text-xs text-[#95A5A6] block">{setting.description}</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Button>)}
      </div>
    </div>;
}