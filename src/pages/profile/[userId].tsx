import React, { useState, useEffect } from 'react';
import { Container, Card, Alert, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// 动态导入 ReactMarkdown 用于显示内容
const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('未登录，请先登录');
          setLoading(false);
          return;
        }

        // 获取目标用户资料
        const response = await fetch(`/api/profile?userId=${userId}&token=${encodeURIComponent(token)}&lang=zh`);
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            console.log('获取到的用户资料:', data.data);
            setProfile(data.data);
            setCurrentUserId(data.data.currentUserId);
          } else {
            setError(data.message || '获取资料失败');
          }
        } else {
          if (response.status === 404) {
            setError('用户不存在');
          } else {
            setError('获取资料失败');
          }
        }
      } catch (err) {
        console.error('获取资料错误:', err);
        setError('获取资料失败');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) {
    return (
      <Container className="my-4">
        <div className="text-center">加载中...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  // 判断是否为当前用户本人
  const isCurrentUser = currentUserId === userId;

  return (
    <Container className="my-4">
      <div className="text-center mb-4">
        <img 
          src="/avatar.png" 
          alt="Avatar" 
          className="rounded-circle mb-3"
          style={{ width: '100px', height: '100px' }}
        />
        <h2>{profile?.username || `用户${userId}`}</h2>
        <p className="text-muted">用户编号: {profile?.userId || userId}</p>
        <p className="text-muted">email: notProvided</p>
        <p className="text-muted">最后在线: {new Date().toLocaleString()}</p>
        
        {/* 只有当前用户查看自己的资料时才显示编辑按钮 */}
        {isCurrentUser && (
          <Button 
            variant="primary" 
            onClick={() => router.push('/profile/edit')}
            className="mt-3"
          >
            编辑个人资料
          </Button>
        )}
      </div>

      {/* 显示个人简介内容 */}
      <Card className="mt-4">
        <Card.Header>
          <h5>个人简介</h5>
        </Card.Header>
        <Card.Body>
          {profile?.description || profile?.content ? (
            <ReactMarkdown>
              {profile.description || profile.content}
            </ReactMarkdown>
          ) : (
            <p className="text-muted">暂无个人简介</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;