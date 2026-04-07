// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Avatar, AvatarImage, Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Textarea } from '@/components/ui';
// @ts-ignore;
import { Camera, Edit, CheckCircle } from 'lucide-react';

export function UserCard({
  currentUser,
  editMode,
  setEditMode,
  form,
  handleSaveProfile
}) {
  const onSubmit = data => {
    handleSaveProfile(data);
  };
  return <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#2C3E50]">
      {/* 头像区域 */}
      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <Avatar className="w-24 h-24 rounded-full border-4 border-[#E8F5E9]">
            <AvatarImage src={currentUser?.avatarUrl || 'https://images.unsplash.com/photo-1535713877996-1b90f63b7b53?w=200'} alt="用户头像" />
          </Avatar>
          {editMode && <div className="absolute bottom-0 right-0 bg-[#3498DB] rounded-full p-2 cursor-pointer hover:bg-[#2980B9] transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </div>}
        </div>
        <div className="flex-1">
          {!editMode ? <div>
              <h2 className="text-[#2C3E50] font-serif text-2xl mb-1">
                {currentUser?.nickName || currentUser?.name || '用户'}
              </h2>
              <p className="text-[#95A5A6] font-sans text-sm">
                {currentUser?.type || '普通会员'}
              </p>
            </div> : <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="name" render={({
              field
            }) => <FormItem>
                      <FormControl>
                        <Input placeholder="您的姓名" className="border-[#95A5A6] focus:border-[#3498DB]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </form>
            </Form>}
        </div>
      </div>

      {/* 个人信息内容 */}
      {!editMode ? <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#95A5A6]">
            <CheckCircle className="w-4 h-4 text-[#1ABC9C]" />
            <span>已实名认证</span>
          </div>
          <p className="text-[#2C3E50] font-sans leading-relaxed">
            热爱生活，追求卓越。享受每一天的阳光，珍惜每一次相遇。
          </p>
          <Button onClick={() => setEditMode(true)} className="w-full bg-[#3498DB] hover:bg-[#2980B9] text-white border-none mt-4">
            <Edit className="w-4 h-4 mr-2" />
            编辑资料
          </Button>
        </div> : <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="nickName" render={({
          field
        }) => <FormItem>
                  <FormLabel className="text-[#2C3E50] font-serif">昵称</FormLabel>
                  <FormControl>
                    <Input placeholder="设置您的昵称" className="border-[#95A5A6] focus:border-[#3498DB]" {...field} />
                  </FormControl>
                  <FormDescription className="text-[#95A5A6]">
                    这是您的公开显示名称
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            <FormField control={form.control} name="bio" render={({
          field
        }) => <FormItem>
                  <FormLabel className="text-[#2C3E50] font-serif">个人简介</FormLabel>
                  <FormControl>
                    <Textarea placeholder="介绍一下自己" className="border-[#95A5A6] focus:border-[#3498DB] resize-none" rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
            <div className="flex gap-3 mt-6">
              <Button type="submit" className="flex-1 bg-[#1ABC9C] hover:bg-[#16A085] text-white border-none">
                保存
              </Button>
              <Button onClick={() => setEditMode(false)} className="flex-1 bg-[#95A5A6] hover:bg-[#7F8C8D] text-white border-none">
                取消
              </Button>
            </div>
          </form>
        </Form>}
    </div>;
}