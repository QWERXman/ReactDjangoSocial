from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Profile
from .serializers import ProfileSerializer


class CurrentUser(APIView):
    def get(self, request):
        queryset = Profile.objects.filter(user_id=request.user.pk)
        serializer = ProfileSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        upd_profile = Profile.objects.get(user_id=request.user.pk)

        if not upd_profile:
            return Response()

        profile_fields = [a.attname for a in Profile._meta.fields]
        for field in request.data:
            if field in profile_fields and request.data.get(field):
                upd_profile.__setattr__(field, request.data.get(field))

        upd_profile.save()

        return Response(ProfileSerializer(Profile.objects.get(user_id=request.user.pk)).data)
