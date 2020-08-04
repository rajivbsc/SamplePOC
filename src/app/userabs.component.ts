abstract class AbsUser
{
  username:string;
  abstract get():any;
  show()
  {
    console.log(this.username);
  }
}