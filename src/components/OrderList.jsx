// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { CheckCircle, Clock, XCircle, ArrowRight } from 'lucide-react';
// @ts-ignore;
import { Button } from '@/components/ui';

export function OrderList({
  pagination
}) {
  const mockOrders = [{
    id: '202401001',
    name: '在线课程 - React 高级开发',
    status: 'completed',
    date: '2024-01-10',
    price: '¥299.00'
  }, {
    id: '202401002',
    name: '云服务年度订阅',
    status: 'pending',
    date: '2024-01-08',
    price: '¥1,299.00'
  }, {
    id: '202401003',
    name: '开发者工具包 Pro',
    status: 'completed',
    date: '2024-01-05',
    price: '¥199.00'
  }, {
    id: '202401004',
    name: '设计素材包',
    status: 'cancelled',
    date: '2024-01-02',
    price: '¥99.00'
  }];
  const getStatusIcon = status => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-[#1ABC9C]" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-[#3498DB]" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-[#95A5A6]" />;
      default:
        return null;
    }
  };
  const getStatusText = status => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'pending':
        return '进行中';
      case 'cancelled':
        return '已取消';
      default:
        return '未知';
    }
  };
  const getStatusColor = status => {
    switch (status) {
      case 'completed':
        return 'text-[#1ABC9C]';
      case 'pending':
        return 'text-[#3498DB]';
      case 'cancelled':
        return 'text-[#95A5A6]';
      default:
        return 'text-[#2C3E50]';
    }
  };
  return <div className="space-y-3">
      {mockOrders.map(order => <div key={order.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-[#F0F3F4] to-[#E8F5E9] rounded-lg border-l-2 border-[#2C3E50] hover:shadow-md transition-shadow">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {getStatusIcon(order.status)}
              <span className={`font-sans font-semibold ${getStatusColor(order.status)}`}>
                {getStatusText(order.status)}
              </span>
            </div>
            <h3 className="text-[#2C3E50] font-serif text-sm mb-1">{order.name}</h3>
            <div className="flex items-center gap-2 text-[#95A5A6] font-sans text-xs">
              <span>订单号: {order.id}</span>
              <span>•</span>
              <span>{order.date}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[#3498DB] font-sans font-semibold">{order.price}</span>
            <Button className="text-[#3498DB] hover:text-[#2980B9] border-[#3498DB] text-xs" size="sm">
          详情
          <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
          </div>
          </div>)}
      </div>;
}