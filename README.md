
  #### [Đăng ký - đăng nhập - đăng xuất](#)
  + Chức năng đăng ký:
    + Tạo file **[form.py](#)** trong ứng dụng home:

    ```py
    from django import forms
    from django.contrib.auth.models import User
    from django.core.exceptions import ObjectDoesNotExist
    import re

    class RegistrationForm(forms.Form):
        username  = forms.CharField(label='Tài khoản', max_length=30)
        email     = forms.EmailField(label='Email')
        password1 = forms.CharField(label='Mật khẩu', widget=forms.PasswordInput())
        password2 = forms.CharField(label='Nhập lại mật khẩu', widget=forms.PasswordInput())
        def clean_password2(self):
            if 'password1' in self.cleaned_data:
                password1 = self.cleaned_data['password1']
                password2 = self.cleaned_data['password2']
                if password1 == password2 and password1:
                    return password2
                raise forms.ValidationError("Mật khẩu không hợp lệ")
        def clean_username(self):
            username = self.cleaned_data['username']
            if not re.search(r'^\w+$', username):
                raise forms.ValidationError("Tên tài khoản có kí tự đặt biệt")
            try:
                User.objects.get(username=username)
            except ObjectDoesNotExist:
                return username
            raise forms.ValidationError("Tên tài khoản đã tồn tại")
        def save(self):
            User.objects.create_user(username=self.cleaned_data['username'], 
                                                email=self.cleaned_data['email'], 
                                                    password=self.cleaned_data['password1'])
    ```
    + Tạo template cho chức năng đăng ký trong ứng dụng home theo đúng cú pháp: **[register.html](#)**
    + Tạo template cho chức năng đăng nhập trong ứng dụng home theo đúng cú pháp: **[login.html](#)**
    + Tạo chức năng xử lý view trong **[home/views.py](#)**:

    ```py
    def register(request):
      form = RegistrationForm()
      if request.method == 'POST':
          form = RegistrationForm(request.POST)
          if form.is_valid():
              form.save()
              return HttpResponseRedirect('/')
      return render(request, 'pages/register.html', {'form':form})
    ```

    + Cấu hình đường dẫn trong file **[home/urls.py](#)**:

    ```py
    path('login/', auth_views.LoginView.as_view(template_name='pages/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='/'), name='logout')
    ```
