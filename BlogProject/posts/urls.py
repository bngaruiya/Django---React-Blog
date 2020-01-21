from rest_framework import routers
from posts.api import PostViewSet

router = routers.DefaultRouter()
router.register('api/posts', PostViewSet, 'posts')

urlpatterns = router.urls