// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Settings, Bell, Shield, HelpCircle, Lock, ChevronRight } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

export function FunctionMenu({
  onNavigate
}) {
  const menuItems = [{
    icon: Settings,
    title: '系统设置',
    description: '管理应用偏好设置',
    pageId: 'settings',
    color: 'text-[#0f3460]'
  }, {
    icon: Bell,
    title: '通知管理',
    description: '查看和管理通知',
    pageId: 'notifications',
    color: 'text-[#e94546]'
  }, {
    icon: Shield,
    title: '安全中心',
    description: '账户安全与隐私设置',
    pageId: 'security',
    color: 'text-[#0f3460]'
  }, {
    icon: Lock,
    title: '密码管理',
    description: '修改密码和登录信息',
    pageId: 'password',
    color: 'text-[#e94546]'
  }, {
    icon: HelpCircle,
    title: '帮助与反馈',
    description: '获取帮助和提交反馈',
    pageId: 'help',
    color: 'text-[#0f3460]'
  }];
  return <div className="bg-[#16213e] rounded-2xl p-6 border border-[#0f3460] shadow-xl">
      <h3 className="text-[#f1f1f1] text-lg font-semibold mb-4 font-montserrat">
        功能菜单
      </h3>
      <div className="space-y-3">
        {menuItems.map((item, index) => {
        const Icon = item.icon;
        return <Button key={index} onClick={() => onNavigate(item.pageId)} className="w-full bg-[#1a1a2e]/50 hover:bg-[#0f3460] text-[#f1f1f1] py-4 px-4 rounded-xl font-opensans flex items-center justify-between border border-[#0f3460]/30 hover:border-[#0f3460] transition-all">
              <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${item.color}`} />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold font-montserrat">{item.title}</span>
                  <span className="text-xs text-[#f1f1f1]/50">{item.description}</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#f1f1f1]/40" />
            </Button>;
      })}
      </div>
    </div>;
}