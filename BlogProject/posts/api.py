from posts.models import Post
from rest_framework import viewsets, permissions
from posts.serializers import PostSerializer

# Post Viewset
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = PostSerializer

    # Get Posts for a specific user
    def get_queryset(self):
        return self.request.user.posts.all()

    # Set the author id during create post
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)